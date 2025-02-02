import { Booking, Gallery, Rooms } from "@/utils/apis";
import axiosInstance from "./axiosInstance";

export const fetchRooms = async () => {
    try {
        const response = await axiosInstance.get(Rooms.AllRooms_API);
        console.log("Respone from all Rooms", response)

        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const fetchSingleRoom = async (slug) => {
    try {
        const response = await axiosInstance.get(Rooms.AllRooms_API + `?slug=${slug}`);
        console.log("Respone from all Rooms", response)

        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};



export const fetchGallery = async () => {
    try {
        const response = await axiosInstance.get(Gallery.AllGallery_API);
        console.log("Respone from all gallery", response)

        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const createBooking = async (data) => {
    try {
        const response = await axiosInstance.post(Booking.BookRoom_API, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};