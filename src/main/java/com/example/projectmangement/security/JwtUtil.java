package com.example.projectmangement.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

public class JwtUtil {

    private static final String SECRET = "projectmanagementsecretkey";

    public static String extractEmail(String token){

        Claims claims = Jwts.parser()
                .setSigningKey(SECRET)
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }

}