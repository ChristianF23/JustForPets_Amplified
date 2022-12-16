import {
    Card,
    Image,
    View,
    Heading,
    Flex,
    Badge,
    Text,
    Button,
    useTheme,
} from '@aws-amplify/ui-react';

export const TarjetaProducto = (props) => {
    const { tokens } = useTheme();
    return (
        <View
            backgroundColor={tokens.colors.background.secondary}
            padding={tokens.space.medium}
        >
            <Card key={props.id}>

                <Flex direction="row" alignItems="flex-start">
                    <Image
                        alt="Foto producto"
                        src={require(`../img/${props.srcImg}.jpg`)}
                        width="33%"
                    />
                    <Flex
                        direction="column"
                        alignItems="flex-start"
                        gap={tokens.space.xs}
                    >

                        <Heading level={5}>
                            {props.nombre}
                        </Heading>

                        <Text as="span">
                            {props.description}
                        </Text>
                        <Text as="span">
                            $ {props.price}
                        </Text>
                        <Button variation="primary">Comprar</Button>
                    </Flex>
                </Flex>
            </Card>
        </View>
    );
};