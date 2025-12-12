import { View, Text, Image, Button, StyleSheet } from 'react-native'

interface CardProps {
    title: string;
    description: string;
    image: string;
    onPress: () => void;
}

export const Card = ({ title, description, image, onPress }: CardProps) => {
    return (
        <View style={styles.card}>
            <Text>Titulo: {title}</Text>
            <Text>Descripcion: {description}</Text>
            <Image source={{ uri: image }} />
            <Button title="Press me" onPress={onPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
})