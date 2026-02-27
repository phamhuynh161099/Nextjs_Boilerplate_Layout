import { http } from "@/lib/http";

const roleApiRequest = {
    sGetAll: (data: any) => http.post<any>(`/api/roles`, data),
    // sLogout: () => http.get<any>('/api/auth/logOut'),
    // sMe: () => http.get<any>('/api/auth/me')
}

export default roleApiRequest;
