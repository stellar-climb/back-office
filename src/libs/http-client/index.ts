import axios from "axios";

// ALB 주소가 아닌 CloudFront 주소를 baseURL로 사용
const apiClient = axios.create({
  baseURL: "https://back-office.stellar-climb.com/admins", // 또는 CloudFront 도메인
  headers: {
    "x-stellar-climb": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  },
});

export const getUsers = () => {
  return apiClient.get("/health"); // 경로만 붙여서 호출
};
