// 몽구스 모듈 가져오기
const mongoose = require('mongoose');

// 스키마 생성
const userSchema = mongoose.Schema({
    //필드작성
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,           //빈칸삭제 biz psh@gmail.com
        unique: 1,
    },
    password: {
        type: String,
        maxlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number //토큰 유효기간
    }
})

// 모델로 스키마 감싸기

const User = mongoose.model('user', userSchema)

//위 모델을 다른 파일에서 사용할 수 있게

module.exports = { User}










