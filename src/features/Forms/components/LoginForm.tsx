import { Button, useToast, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { SubmitHandler } from "react-hook-form";

import { Form, InputField } from "@/components/Elements/Form";

import { loginSchema } from "../schema";
import { LoginFormValues } from "../types";

export const LoginForm: FC = () => {
  const toast = useToast();
  const handleSubmit: SubmitHandler<LoginFormValues> = (data) => {
    toast({
      title: "ログインしました。",
      status: "success",
      description: `[${data.name}][${data.email}][${data.password}]`,
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <Form<LoginFormValues> onSubmit={handleSubmit} schema={loginSchema}>
      {({ register, formState }) => (
        <VStack spacing={4}>
          <InputField
            size={"sm"}
            label={"お名前"}
            type={"text"}
            isRequired
            placeholder="お名前"
            registration={register("name")}
            error={formState.errors["name"]}
          />

          <InputField
            size={"sm"}
            label={"メールアドレス"}
            type={"email"}
            isRequired
            placeholder="メールアドレス"
            registration={register("email")}
            error={formState.errors["email"]}
          />

          <InputField
            size={"sm"}
            label={"パスワード"}
            type={"text"}
            isRequired
            placeholder="パスワード"
            registration={register("password")}
            error={formState.errors["password"]}
          />

          <Button type="submit" size={"sm"}>
            ログイン
          </Button>
        </VStack>
      )}
    </Form>
  );
};
