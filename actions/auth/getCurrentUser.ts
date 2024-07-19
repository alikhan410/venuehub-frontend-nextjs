import { CurrentUserResponse, ErrorResponse, Session } from "@/types";
import { sessionCheck } from "@/utils/sessionCheck";

export const getCurrentUser = async (): Promise<CurrentUserResponse> => {
  console.log("------------------------------------------------");
  const fallback: CurrentUserResponse = { username: null, roles: [], loggedInAs: null, isLogged: false };
  const session = await sessionCheck();
  if ((session as ErrorResponse).error) return fallback;
  try {
    const res = await fetch(`${process.env.HOST}/current-user`, {
      cache: "no-store",
      method: "GET",
      headers: { Authorization: `Bearer ${(session as Session).jwt}` },
    });

    const data = await res.json();

    if (res.status != 200) {
      console.log(`got ${res.status} from /current-user`);
      return fallback;
    }

    console.log(`got ${res.status} from /current-user`);
    const currentUser: CurrentUserResponse = { ...data, isLogged: true };

    return currentUser;
  } catch (error) {
    return fallback;
  }
};
