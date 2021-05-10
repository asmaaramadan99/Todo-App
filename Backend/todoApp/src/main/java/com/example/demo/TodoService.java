package com.example.demo;

import modules.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoService {
    private static List<Todo> todos=new ArrayList<>();
    private static int idCounter=0;
    static {
        todos.add(new Todo((long) ++idCounter,"asmaa","learn to dance",new Date(),false));
        todos.add(new Todo((long) ++idCounter,"asmaa","learn to sing",new Date(),false));
    }
    public List<Todo> findAll()
    {
        return todos;
    }
}
