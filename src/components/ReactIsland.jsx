import { Mascot } from 'page-mascot'
import { useEffect, useState } from 'react';

export default function ReactIsland() {
    const [visitorIp, setVisitorIp] = useState('Unknown Visitor');

    useEffect(() => {
        const fetchVisitorIp = async () => {
            const ip = await getVisitorIp();
            setVisitorIp(ip);
        };

        fetchVisitorIp();
    }, []);

    const handleClick = async () => {
        const data = {
            service_id: 'service_b9zcmij',
            template_id: 'template_nwj0wh3',
            user_id: 'DkOvT4zEiUDiH0foi',
            template_params: {
                'name': visitorIp,
                'title': 'Mascot says Hi!',
                'message': `Hello, ${visitorIp}!`
            }
        };

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
        } catch (error) {
            console.error('Error sending mascot message:', error);
        }
    };

    return (
        <div style={{ paddingTop: '70px' }} onClick={handleClick}>
            <Mascot
                directions="/mascots/panda-directions.webp"
                reactions="/mascots/panda-reactions.webp"

            />
        </ div>
    )
};

const getVisitorIp = async () => {
    try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        if (!ipResponse.ok) {
            throw new Error(`Failed to fetch IP with status ${ipResponse.status}`);
        }
        const ipData = await ipResponse.json();
        return ipData.ip;
    } catch (error) {
        console.warn('Could not determine visitor IP:', error);
        return 'Unknown Visitor';
    }
};