package Backend.chaubisedhakaBackend.controller;

import Backend.chaubisedhakaBackend.model.AppRole;
import Backend.chaubisedhakaBackend.model.Role;
import Backend.chaubisedhakaBackend.model.User;
import Backend.chaubisedhakaBackend.repositories.RoleRepository;
import Backend.chaubisedhakaBackend.repositories.UserRepository;
import Backend.chaubisedhakaBackend.security.jwt.JwtUtils;
import Backend.chaubisedhakaBackend.security.request.LoginRequest;
import Backend.chaubisedhakaBackend.security.request.SignupRequest;
import Backend.chaubisedhakaBackend.security.response.MessageResponse;
import Backend.chaubisedhakaBackend.security.response.UserInfoResponse;
import Backend.chaubisedhakaBackend.security.services.UserDetailsImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    RoleRepository roleRepository;

    @PostMapping("/signin")
    public ResponseEntity<?>authenticateUser(@RequestBody LoginRequest loginRequest){
        Authentication authentication;
        try {
            authentication=authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    loginRequest.getUsername(),
                    loginRequest.getPassword()
            )
            );
        }catch (AuthenticationException exception) {
            Map<String,Object> map=new HashMap<>();
            map.put("message","Bad credentials");
            return new ResponseEntity<Object>(map, HttpStatus.NOT_FOUND);
        }
        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDetailsImpl userDetails= (UserDetailsImpl) authentication.getPrincipal();

        ResponseCookie jwtCookie=jwtUtils.generateJwtCookie(userDetails);

        List<String> roles=userDetails.getAuthorities().stream()
                .map(item->item.getAuthority())
                .collect(Collectors.toList());

        UserInfoResponse response=new UserInfoResponse(userDetails.getId(),
                userDetails.getUsername(),roles);
        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE,
                jwtCookie.toString())
                .body(response);
    }

    @PostMapping("/signup")
    public ResponseEntity<?>registerUser(@Valid @RequestBody SignupRequest signupRequest){
     if(userRepository.existsByUserName(signupRequest.getUsername())){
         return ResponseEntity.badRequest().body(new MessageResponse("Error:Username is already taken"));
     }
        if(userRepository.existsByEmail(signupRequest.getEmail())){
            return ResponseEntity.badRequest().body(new MessageResponse("Error:Email is already taken"));
        }

        User user=new User(
                signupRequest.getUsername(),
                signupRequest.getEmail(),
                passwordEncoder.encode(signupRequest.getPassword())
        );
        Set<String>stringRoles=signupRequest.getRole();
        Set<Role>roles=new HashSet<>();

        if(stringRoles==null){
            Role userRole= roleRepository.findByRoleName(AppRole.ROLE_USER)
                    .orElseThrow(()->new RuntimeException("Error:Role is not found"));
            roles.add(userRole);
        }else {
        stringRoles.forEach(
                role->{
                    switch (role){
                        case "admin":
                            Role adminRole= roleRepository.findByRoleName(AppRole.ROLE_ADMIN)
                                    .orElseThrow(()->new RuntimeException("Error:Role is not found"));
                            roles.add(adminRole);
                            break;
                        case "seller":
                            Role sellerRole= roleRepository.findByRoleName(AppRole.ROLE_SELLER)
                                    .orElseThrow(()->new RuntimeException("Error:Role is not found"));
                            roles.add(sellerRole);
                            break;
                        default:
                            Role userRole= roleRepository.findByRoleName(AppRole.ROLE_USER)
                                    .orElseThrow(()->new RuntimeException("Error:Role is not found"));
                            roles.add(userRole);
                    }
                });
        }
        user.setRoles(roles);
        userRepository.save(user);
        return  ResponseEntity.ok(new MessageResponse("User registered successfully"));
        }
      }



