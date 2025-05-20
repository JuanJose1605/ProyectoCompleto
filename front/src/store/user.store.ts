import { axiosClient } from "@/services/axios.service";
import { create } from "zustand";

interface User {
    id: string;
    name: string
    email: string;
    password: string;
    createAt?: Date;
    updateAt?: Date;
}

type Store ={
    user : User | null
    getUser(): void
}

export const useUserStore = create<Store>()(set => ({
    user:null,
    getUser: async() =>{
        try {
            const {data} = await axiosClient.get<User>("/user")
            set({
                user:data
            })
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    },
}))
