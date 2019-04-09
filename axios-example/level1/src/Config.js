var BASE_URL = '/api';

export default {
    PAGESIZE : 5, // 한페이지에 보여줄 페이지 사이즈
    FETCH : BASE_URL + '/contacts', // 전체 연락처 데이터 요청( 페이징 포함 )
    ADD : BASE_URL + '/contacts', // 연락처 추가
    UPDATE : BASE_URL + '/contacts/${no}', // 연락처 업데이트
    FETCH_ONE : BASE_URL + '/contacts/${no}', // 연락처 1건 조회
    DELETE : BASE_URL + '/contacts/${no}', //연락처 삭제
    UPDATE_PHOTO : BASE_URL + '/contacts/${no}/photo'
}