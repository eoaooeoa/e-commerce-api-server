# 프로젝트 개요

## 1. 소개

### 전자상거래 서비스의 기본 기능 제공을 위한 API 서버를 구축
1. 회원가입, 로그인, 회원정보 수정 등 User 정보 관련 CRUD
2. 제품 목록 조회 및 제품 등록/삭제 등 Category, Product 정보 관련 CRUD
3. 주문 조회 및 삭제 등 Order 정보 관련 CRUD

</br>

## 2. REST API 설계
API는 기본적으로 CRUD를 모두 구현

User(사용자) API 예시로 설명

### Create
- Method: POST
- Path: /api/users

### Read
- Method: GET
- Path
  - /api/users (사용자 목록 조회)
  - /api/users/:userId (특정 사용자 조회)

### Update
- Method: PUT
- Path: /api/users/:userId

### Delete
- Method: DELETE
- Path: /api/users/:userId

</br>

### 2-1. API 문서

### https://documenter.getpostman.com/view/23970613/2s8YRqmAu6 (유저 API)
### https://documenter.getpostman.com/view/23953353/2s8YRgqEmv (카테고리 API)
### https://documenter.getpostman.com/view/23953353/2s8YRiMa3h (상품 API)
### https://documenter.getpostman.com/view/23953353/2s8YYBSSLx (주문 API)

</br>

## 3. 백엔드 기술 스택

- Express(nodemon, babel-node)
- MongoDB, Mongoose
- cors
- multer