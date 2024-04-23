import { NextResponse } from 'next/server';
import {TodoService} from "@/src/server/service/todo.service";
import {Provider} from "@/src/server/provider/provider";


export const GET = async () => {
  const todoService = Provider.getService(TodoService)
  const content = "이것은 신규";
  const entity = await todoService.createTodo(content);

  return NextResponse.json({entity});
};
