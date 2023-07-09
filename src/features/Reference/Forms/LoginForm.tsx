import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/Elements/Form";

export type LoginFormValues = {
  name: string;
  email: string;
  password: string;
};

export const LoginForm: FC = () => {
  const toast = useToast();
  const handleSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data);
    toast({
      title: "ログインしました。",
      status: "success",
      description: `[${data.name}][${data.email}][${data.password}]`,
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <Form<LoginFormValues>
      onSubmit={handleSubmit}
      schema={z.object({
        name: z.string().nonempty("名前を入力してください。"),
        email: z.string().email("正しいメールアドレスを入力してください。"),
        password: z.string().min(6, "パスワードは6文字以上で入力してください。"),
      })}
    >
      {({ register, formState: { errors } }) => (
        <VStack spacing={4}>
          <FormControl isInvalid={errors.name ? true : false}>
            <FormLabel>お名前（必須）</FormLabel>
            <Input {...register("name", { required: true })} placeholder="名前" />
            {errors.name && <FormErrorMessage>{errors.name?.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isInvalid={errors.email ? true : false}>
            <FormLabel>メールアドレス（必須）</FormLabel>
            <Input {...register("email", { required: true })} placeholder="メールアドレス" />
            {errors.email && <FormErrorMessage>{errors.email?.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isInvalid={errors.password ? true : false}>
            <FormLabel>パスワード（必須）</FormLabel>
            <Input
              {...register("password", { required: true })}
              type="password"
              placeholder="パスワード"
            />
            {errors.password && <FormErrorMessage>{errors.password?.message}</FormErrorMessage>}
          </FormControl>

          <Button type="submit">ログイン</Button>
        </VStack>
      )}
    </Form>
  );
};
