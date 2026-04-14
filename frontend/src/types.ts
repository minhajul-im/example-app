// Type definition for user data
export interface UserData {
  id: number;
  name: string;
  contact: string;
}

// Type definition for API response (GET)
export interface UsersResponse {
  message: string;
  users: UserData[];
}

// Type definition for POST response
export interface CreateResponse {
  message: string;
  user: UserData;
}

// Type definition for DELETE response
export interface DeleteResponse {
  message: string;
  id: number;
}
