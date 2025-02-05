export async function find(BaseURL, apikey, dataSource, database, collection,projection = {}) {
    try {
        const response = await fetch(`${BaseURL}/find`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': apikey
            },
            body: JSON.stringify({
                "dataSource": dataSource,
                "database": database,
                "collection": collection,
                "projection": projection
            })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Failed to fetch document:', error.message);
        throw error;
    }
}