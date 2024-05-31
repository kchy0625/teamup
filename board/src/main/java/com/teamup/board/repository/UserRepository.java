package com.teamup.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teamup.board.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String> {

    public boolean existsByUserEmailAndUserPassword(String userEmail, String userPassword);

}
