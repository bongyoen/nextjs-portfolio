import {NextRequest, NextResponse} from 'next/server';
import {TodoService} from "@/src/server/service/todo.service";
import {Provider} from "@/src/server/provider/provider";


export const POST = async (request: NextRequest) => {
    const todoService = Provider.getService(TodoService)
    const content = "이것은 신규1";
    // const entity =
    await todoService.createTodo(content);

    console.log("도달")
    return NextResponse.redirect(new URL('/contact?ok', request.url));


};
