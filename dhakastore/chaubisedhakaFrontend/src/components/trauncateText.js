const trauncateText = (text, charLimit = 90) => {
  if (text?.length > charLimit) {
    return text.slice(0, charLimit) + "...";
  }
};

export default trauncateText;
