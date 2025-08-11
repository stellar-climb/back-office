import axios from "axios";

// ALB 주소가 아닌 CloudFront 주소를 baseURL로 사용
const apiClient = axios.create({
  baseURL: "https://back-office.stellar-climb.com", // 또는 CloudFront 도메인
});

export const getUsers = () => {
  return apiClient.get("/health"); // 경로만 붙여서 호출
};
