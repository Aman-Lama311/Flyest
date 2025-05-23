import api from "./api";
import { CategoryType } from "../../Types/CategoryTypes";

interface CategoryRespone {
    data: CategoryType[];
    status:string;
}

export const getCategories = async () => {
    try {
        const response = await api.get("/category");
        return response.data as CategoryRespone;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};
