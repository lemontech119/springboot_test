package com.gpch.login.repository;

import com.gpch.login.model.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("userRepository")
public interface UserRepository extends JpaRepository <user, Long> {
    user findByEmail(String email);
}
