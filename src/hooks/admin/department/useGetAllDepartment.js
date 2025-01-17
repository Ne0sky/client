
import { useState } from 'react';
import Cookies from 'universal-cookie';
import { useAuth } from '../../../context/TokenContext.jsx';
const useGetAllDepartment = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [departments, setDepartments] = useState([]);
    const { getToken } = useAuth();

    const getAllDepartments = async () => {
        setIsLoading(true);
        setError(null);
        try {
           const token = getToken();
            const base_url = import.meta.env.VITE_BASE_URL;
            const response = await fetch(`${base_url}/admin/all/depts`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to get departments');
            }

            const data = await response.json();
            console.log(data);
            const array = data.data;
            return array;


        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { getAllDepartments, isLoading, error, departments };
};

export default useGetAllDepartment;
