package com.example.sql.api;


import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ApiDao {
    protected static final String NAMESPACE = "com.example.sql.api.";

    @Autowired
    private SqlSession sqlSession;

    public String selectName() {
        return sqlSession.selectOne(NAMESPACE + "selectName");
    }
}
