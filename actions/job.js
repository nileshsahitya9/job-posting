const CreateJob = async (payload) => {
    const res = await fetch(`${process.env.BACKEND_URL}/postings`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...payload })
    });
    const resJson = await res.json();
    return resJson.success;
}

export {
    CreateJob
};