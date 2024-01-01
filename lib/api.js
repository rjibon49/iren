export const sendContactForm = async (data) => {
    const formData = new FormData();

    // Append text data
    Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
    });

    // Append file data (assuming 'attachment' is the key for the file)
    if (data.attachment) {
        formData.append('attachment', data.attachment);
    }

    return fetch("/api/contact", {
        method: "POST",
        body: formData,
    })
    .then((res) => {
        if (!res.ok) throw new Error("Failed to send Message");
        return res.json();
    });
};