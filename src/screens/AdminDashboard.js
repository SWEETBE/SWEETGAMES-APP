// AdminDashboard.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const AdminDashboard = () => {
    const [games, setGames] = React.useState([]);

    const approveGame = (gameId) => {
        // Logic to approve the game with the given gameId
        console.log(`Game with ID ${gameId} approved`);
    };

    React.useEffect(() => {
        // Fetch the uploaded games requiring admin approval
        const fetchGames = async () => {
            // Simulated fetch request
            const response = await fetch('/api/games?status=pending');
            const data = await response.json();
            setGames(data);
        };

        fetchGames();
    }, []);

    return (
        <View>
            <Text>Admin Dashboard</Text>
            {games.map((game) => (
                <View key={game.id}>
                    <Text>{game.title}</Text>
                    <Button title="Approve" onPress={() => approveGame(game.id)} />
                </View>
            ))}
        </View>
    );
};

export default AdminDashboard;