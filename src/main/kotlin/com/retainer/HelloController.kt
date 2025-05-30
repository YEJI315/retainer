package com.retainer

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class HelloController {

    @GetMapping("/")
    fun home(): String {
        return "Hello World! 스프링부트 + 코틀린 성공! 🎉"
    }

    @GetMapping("/hello")
    fun hello(): String {
        return "안녕하세요! 첫 번째 API입니다."
    }

    @GetMapping("/api/status")
    fun status(): Map<String, Any> {
        return mapOf(
            "status" to "OK",
            "message" to "서버가 정상적으로 실행 중입니다",
            "timestamp" to System.currentTimeMillis()
        )
    }
}