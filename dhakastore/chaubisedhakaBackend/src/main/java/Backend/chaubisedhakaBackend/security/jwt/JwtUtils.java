package Backend.chaubisedhakaBackend.security.jwt;

import Backend.chaubisedhakaBackend.security.services.UserDetailsImpl;
import Backend.chaubisedhakaBackend.security.services.UserDetailsServiceImpl;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseCookie;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.util.WebUtils;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Date;

@Component
public class JwtUtils {

    private static final Logger logger= LoggerFactory.getLogger(JwtUtils.class);

    @Value("${spring.app.jwtExpirationMs}")
    private int jwtExpirationMs;

    @Value("${spring.app.jwtSecret}")
    private String jwtSecret;

    @Value("${spring.app.jwtCookie}")
    private String jwtCookie;


    public String getJwtFromCookies(HttpServletRequest request) {
        Cookie cookie = WebUtils.getCookie(request, jwtCookie);
        if (cookie!= null) {
            return cookie.getValue();
        } else {
            return null;
        }
    }

    public ResponseCookie generateJwtCookie(UserDetailsImpl userPrincipal){
       String jwt=generateTokenFromUsername(userPrincipal.getUsername());
       ResponseCookie cookie= ResponseCookie.from(jwtCookie,jwt)
               .path("/api")
               .maxAge(24*60*60)
               .httpOnly(false)
               .secure(false)
               .build();
               return cookie;
    }

    public ResponseCookie getCleanJwtCookie(){
        ResponseCookie cookie=ResponseCookie.from(jwtCookie,null)
                .path("/api")
                .build();
        return cookie;
    }

    private String generateTokenFromUsername(String username) {
        return Jwts.builder()
                .subject(username)
                .issuedAt(new Date())
                .expiration(new Date(new Date().getTime()+jwtExpirationMs))
                .signWith(key())
                .compact();
    }


    public String getUsernameFromJwtToken(String token){
        return Jwts.parser()
                .verifyWith((SecretKey) key())
                .build().parseSignedClaims(token)
                .getPayload().getSubject();
    }

    private Key key(){
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
    }

    public boolean validateJwtToken(String authToken){
        try{
             Jwts.parser()
                    .verifyWith((SecretKey) key())
                    .build().parseSignedClaims(authToken);
            return true;
        }catch(MalformedJwtException e){
            logger.error("Invalid jwt token:{}",e.getMessage());
        }catch (ExpiredJwtException e){
            logger.error("Jwt token is expired:{}",e.getMessage());
        }catch(UnsupportedJwtException e){
            logger.error("Jwt token is not supported:{}",e.getMessage());
        }catch (IllegalArgumentException e){
            logger.error("Jwt claims string is empty:{}",e.getMessage());
        }
        return false;
    }
}
