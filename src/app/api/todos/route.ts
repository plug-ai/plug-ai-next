import { NextRequest, NextResponse } from 'next/server';
import { canAccessProtectedRoutes } from '../plugin/[...plugAi]/route';

/**
 * @swagger
 * /api/todos:
 *   get:
 *     operationId: getTodos
 *     description: Gets a list of todo tasks
 *     responses:
 *       200:
 *         description: Returns a list of todo tasks.
 */
export async function GET(req: NextRequest) {
    if (canAccessProtectedRoutes(req)) {
        return NextResponse.json({ todos: ['todo1', 'todo2'] });
    } else {
        return NextResponse.json('Unauthorized.', {
            status: 401,
        });
    }
}

/**
 * @swagger
 * /api/todos:
 *   post:
 *     operationId: createTodo
 *     description: Creates a todo task
 *     responses:
 *       201:
 *         description: Todo task has been created. The return data contains information about the created todo task.
 */
export async function POST(req: NextRequest) {
    if (canAccessProtectedRoutes(req)) {
        const body = await req.json();
        return NextResponse.json(body);
    } else {
        return NextResponse.json('Unauthorized.', {
            status: 401,
        });
    }
}
