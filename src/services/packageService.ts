import api from "./api";
import { PackageType } from "../../Types/PackageType";

interface PackageResponse {
    data: PackageType[];
    status:string;
}

export const getPackagebySubCategoryId = async (subCategoryId:string) => {
    try {
        const response = await api.get(`/package/subcategory/${subCategoryId}`);
        return response.data as PackageResponse;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};
