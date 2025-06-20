"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { User } from "../helpers/interfaces"
import { fetchFromMussllePerfilApi } from "../helpers/api"

type UserDetailsContextType = {
  myProfile?: User
  technicalSheets: User["technicalSheets"] | []
  loading: boolean
  refreshUser: () => Promise<void>
}

const UserDetailsContext = createContext<UserDetailsContextType>({
  myProfile: undefined,
  technicalSheets: [],
  loading: true,
  refreshUser: async () => {},
})

export const UserDetailsProvider = ({ children }: { children: React.ReactNode }) => {
  const [myProfile, setMyProfile] = useState<User>();
  const [technicalSheets, setTechnicalSheets] = useState<User["technicalSheets"]>([]);
  const [loading, setLoading] = useState(true);

  async function getUserInfo() {
    setLoading(true);
    try {
      const response = await fetchFromMussllePerfilApi("/me", { method: "GET" });
      const userData = await response.json();
      setMyProfile(userData || undefined);
      setTechnicalSheets(userData.technicalSheets || []);
    } catch (error) {
      setMyProfile(undefined);
      setTechnicalSheets([]);
      console.error("Erro ao buscar dados do usuário:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <UserDetailsContext.Provider value={{ myProfile, technicalSheets, loading, refreshUser: getUserInfo }}>
      {children}
    </UserDetailsContext.Provider>
  );
}

export function useUserDetails() {
  return useContext(UserDetailsContext);
}




