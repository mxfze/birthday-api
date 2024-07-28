export const data: Data = {
    report: [
        {
            "id": "9f4a7d28-1a1b-449a-bcf4-85270038b9b5",
            "name": "Mofe",
            "email": "mofe.obasola@gmail.com",
            "date": "23/09"
        },
    ],
}

interface Data {
    report: {
        id: string;
        name: string;
        email: string;
        date: string
    }[];
}

