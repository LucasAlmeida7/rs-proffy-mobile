import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import noFavouriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://avatars3.githubusercontent.com/u/39287513?s=400&u=df7b082967137ba18fa8a9bf8fd8a4ea99dfa405&v=4' }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Lucas Almeida</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Nothing is true, everything is permited!!!
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {' '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonContainer}>
                    <RectButton style={[styles.favouriteButton, styles.favourited]}>
                        <Image source={heartOutlineIcon} />
                        <Image source={noFavouriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;