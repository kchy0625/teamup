package com.teamup.board.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teamup.board.dto.ResponseDto;
import com.teamup.board.dto.SignInDto;
import com.teamup.board.dto.SignInResponseDto;
import com.teamup.board.dto.SignUpDto;
import com.teamup.board.entity.UserEntity;
import com.teamup.board.repository.UserRepository;
import com.teamup.board.security.TokenProvider;

//@Transactional
@Service
public class AuthService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    TokenProvider tokenProvider;

    public ResponseDto<?> signUp(SignUpDto dto) {
        String userEmail = dto.getUserEmail();
        String userPassword = dto.getUserPassword();
        String userPasswordCheck = dto.getUserPasswordCheck();

        // email 중복 확인
        try {
            if (userRepository.existsById(userEmail))

                return ResponseDto.setFailed("Existed Eamil");

        } catch (Exception error) {
            return ResponseDto.setFailed("Database 중복확인 Error!");
        }

        // 비밀번호가 서로 다르면 failed response 반환!
        if (!userPassword.equals(userPasswordCheck))
            return ResponseDto.setFailed("Password does not matched!");

        // UserEntity 생성
        UserEntity userEntity = new UserEntity(dto);

        // UserRepository를 이용해서 데이터베이스 Entity 저장!
        System.out.println("함수 두둥장1");
        try {
            System.out.println(userEntity);
            System.out.println("배고파");

            userRepository.save(userEntity);
            System.out.println("여기까지는 오자 제발");

        } catch (Exception error) {
            return ResponseDto.setFailed("Database 저장 Error!");
        }
        // 성공시 success response 반환
        return ResponseDto.setSuccess("Sign Up Success!", null);

    }

    public ResponseDto<SignInResponseDto> signIn(SignInDto dto) {
        String userEmail = dto.getUserEmail();
        String userPassword = dto.getUserPassword();
        try {
            boolean existed = userRepository.existsByUserEmailAndUserPassword(userEmail, userPassword);
            if (!existed)
                return ResponseDto.setFailed("Sign In Information Does Not Match.");
        } catch (Exception error) {
            return ResponseDto.setFailed("Database Error");
        }

        UserEntity userEntity = null;
        try {
            userEntity = userRepository.findById(userEmail).get();

        } catch (Exception error) {
            return ResponseDto.setFailed("Database Error");
        }

        userEntity.setUserPassword("");

        String token = tokenProvider.create(userEmail);
        int exprtime = 3600000;

        SignInResponseDto signInResponseDto = new SignInResponseDto(token, exprtime, userEntity);
        return ResponseDto.setSuccess("Sign In Success", signInResponseDto);
    }

}
