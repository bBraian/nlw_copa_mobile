import { Button as ButtonNativeBase, Text, IButtonProps } from 'native-base';

interface ButtonProps extends IButtonProps {
    title: string;
    type?: 'PRIMARY' | 'SECONDARY'
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <ButtonNativeBase
            w="full"
            h={14}
            rounded="sm"
            fontSize="md"
            {...rest}
        >
            <Text>{title}</Text>
        </ButtonNativeBase>   
    )
}