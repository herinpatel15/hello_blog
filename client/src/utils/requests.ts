type postData = 
| {username: string, email: string, password: string}
| {username: string, password: string}

export const simple_post = async (route: string, data: postData): Promise<Response> => {
    const response = await fetch(import.meta.env.VITE_API_BASE_URL+route, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
        credentials: 'include'
    })
    return response;
}