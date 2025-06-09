package com.retainer.controller

import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api")
class TestController {

    @GetMapping("/hello")
    fun hello(): Map<String, String> {
        return mapOf("message" to "Hello from Kotlin Backend!")
    }

    @PostMapping("/echo")
    fun echo(@RequestBody data: Map<String, Any>): Map<String, Any> {
        return mapOf(
            "received" to data,
            "timestamp" to System.currentTimeMillis()
        )
    }
}