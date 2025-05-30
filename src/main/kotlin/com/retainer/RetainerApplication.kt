package com.retainer

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class RetainerApplication

fun main(args: Array<String>) {
	runApplication<RetainerApplication>(*args)
}
