export function decodeToken(token: string): object {
  const jwt = token.split(".")[1];

  const jsonPayload = decodeURIComponent(
    window
      .atob(jwt)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(""),
  );

  return JSON.parse(jsonPayload);
}
