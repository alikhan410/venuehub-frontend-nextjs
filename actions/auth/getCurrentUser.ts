"use server";
import { CurrentUserResponse, ErrorResponse, Session } from "@/types";
import { sessionCheck } from "@/utils/sessionCheck";
import { Logger, ILogObj } from "tslog";
import { colorStatus } from "@/utils/colorStatus";

export const getCurrentUser = async (): Promise<CurrentUserResponse> => {
  const logger: Logger<ILogObj> = new Logger({
    hideLogPositionForProduction: true,
    name: "actions/auth/getCurrentUser.ts",
  });

  const fallback: CurrentUserResponse = { username: null, roles: [], loggedInAs: null, isLogged: false };

  // Define timeout duration (1 second)
  const timeoutDuration = 1000; // 1 second

  // Create a timeout promise
  const timeoutPromise = new Promise<CurrentUserResponse>((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), timeoutDuration)
  );

  // Perform the fetch request
  const fetchPromise = (async () => {
    const session = await sessionCheck();

    if ((session as ErrorResponse).error) return fallback;

    try {
      const res = await fetch(`${process.env.HOST}/current-user`, {
        cache: "no-store",
        method: "GET",
        headers: { Authorization: `Bearer ${(session as Session).jwt}` },
      });

      logger.info(`got ${colorStatus(res.status)} from /current-user`);

      if (res.status != 200) {
        return fallback;
      }

      const data = await res.json();
      const currentUser: CurrentUserResponse = { ...data, isLogged: true };
      return currentUser;
    } catch (error) {
      return fallback;
    }
  })();

  // Use Promise.race to handle the timeout
  try {
    return await Promise.race([fetchPromise, timeoutPromise]);
  } catch (error) {
    return fallback;
  }
};

// export const getCurrentUser = async (): Promise<CurrentUserResponse> => {
//   const logger: Logger<ILogObj> = new Logger({
//     hideLogPositionForProduction: true,
//     name: "actions/auth/getCurrentUser.ts",
//   });

//   console.log(
//     "----------------------------------------------------------------------------------------------------------"
//   );

//   const fallback: CurrentUserResponse = { username: null, roles: [], loggedInAs: null, isLogged: false };
//   const session = await sessionCheck();

//   if ((session as ErrorResponse).error) return fallback;

//   try {
//     const res = await fetch(`${process.env.HOST}/current-user`, {
//       cache: "no-store",
//       method: "GET",
//       headers: { Authorization: `Bearer ${(session as Session).jwt}` },
//     });
//     logger.info(`got ${colorStatus(res.status)} from /current-user`);

//     if (res.status != 200) {
//       return fallback;
//     }

//     const data = await res.json();

//     const currentUser: CurrentUserResponse = { ...data, isLogged: true };

//     return currentUser;
//   } catch (error) {
//     return fallback;
//   }
// };
