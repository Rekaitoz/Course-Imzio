import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAt, IconDatabase, IconLock } from "@tabler/icons-react";
import { useLogin } from "../api";

const RegisterForm: React.FC = () => {
  const form = useForm({
    initialValues: { username: "", password: "" },
  });
  const loginMutation = useLogin({
    config: {
      onError: ({ response }) => {
        form.setErrors({
          username: " ",
          password: (response?.data as any).messages.error,
        });
      },
    },
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await loginMutation.mutateAsync({ data: form.values });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="mb-3">
        <TextInput
          name="name"
          size="md"
          styles={{
            input: {
              backgroundColor: "#3181B840",
              color: "black",
              fontWeight: 500,
            },
          }}
          withAsterisk={false}
          placeholder="Full Name"
          variant="filled"
          // icon={<IconAt size={14} />}
          required
          {...form.getInputProps("username")}
        />
      </div>
      <div className="mb-3">
        <TextInput
          name="email"
          size="md"
          styles={{
            input: {
              backgroundColor: "#3181B840",
              color: "black",
              fontWeight: 500,
            },
          }}
          withAsterisk={false}
          placeholder="Email Address"
          variant="filled"
          // icon={<IconAt size={14} />}
          required
          {...form.getInputProps("username")}
        />
      </div>

      <div className="mb-3">
        <PasswordInput
          name="password"
          size="md"
          styles={{
            input: {
              backgroundColor: "#3181B840",
              color: "black",
              fontWeight: 500,
            },
          }}
          variant="filled"
          withAsterisk={false}
          placeholder="Password"
          required
          {...form.getInputProps("password")}
        />
      </div>
      <div className="mb-4">
        <PasswordInput
          name="passwordRe"
          size="md"
          styles={{
            input: {
              backgroundColor: "#3181B840",
              color: "black",
              fontWeight: 500,
            },
          }}
          variant="filled"
          withAsterisk={false}
          placeholder="Re-Enter Password"
          required
          {...form.getInputProps("password")}
        />
      </div>

      <Button
        className="bg-cyan-600 hover:bg-cyan-700"
        type="submit"
        radius="md"
        fullWidth
      >
        SIGN UP
      </Button>
      <div className="text-center text-gray-800 text-sm font-bold mt-3">
        Already have an account?
      </div>
      <a
        href="/login"
        className="flex justify-center mt-3 text-cyan-600 text-sm font-bold "
      >
        SIGN IN
      </a>

      <div className="flex flex-col gap-y-4 lg:flex-row gap-x-3 justify-between mt-5">
        <Button
          leftIcon={<img src="/Login/google.png" width={22} alt="" />}
          className="bg-cyan-600 bg-opacity-20 hover:bg-cyan-600 hover:bg-opacity-30 text-black text-opacity-60 text-xs"
          type="submit"
          radius="md"
        >
          SIGN IN WITH GOOGLE
        </Button>
        <Button
          leftIcon={<img src="/Login/facebook.png" width={25} alt="" />}
          className="bg-cyan-600 bg-opacity-20 hover:bg-cyan-600 hover:bg-opacity-30 text-black text-opacity-60 text-xs"
          type="submit"
          radius="md"
        >
          SIGN IN WITH FACEBOOK
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
