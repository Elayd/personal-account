import Input from '../../components/Input/Input.tsx';
import { Button } from '../../components/Button/Button.tsx';
import { ChangeEvent, FormEvent, useState } from 'react';
import useMutationPersonInfo from './queryHooks/useMutationPersonInfo.tsx';
import { PersonData } from './types/types.ts';
import useUserDataQuery from '../AuthPage/queryHooks/useUserInfoQuery.tsx';
import RadioButtonGroup from '../../components/Checkbox/Checkbox.tsx';
import { RadioOption } from '../../types/types.ts';

const ProfilePage = () => {
  const { data } = useUserDataQuery();
  const [name, setName] = useState(data?.name);
  const [secondName, setSecondName] = useState(data?.secondName);
  const [dateOfBirth, setDateOfBirth] = useState(data?.dateOfBirth);
  const [gender, setGender] = useState(data?.gender);

  const [disableEdit, setDisableEdit] = useState(true);

  const handleChangeDisableStatus = () => {
    setDisableEdit(false);
  };

  const handleChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleChangeSecondName = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondName(event.target.value);
  };
  const handleChangeDateOfBirth = (event: ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth(event.target.value);
  };

  const profileChangeMutation = useMutationPersonInfo();
  const handleFunction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name && secondName && dateOfBirth && gender) {
      const data: PersonData = { name, secondName, dateOfBirth, gender };
      profileChangeMutation.mutate(data);
      setDisableEdit(true);
    }
  };

  const options: RadioOption[] = [
    { id: 'Male', label: 'Male' },
    { id: 'Female', label: 'Female' }
  ];

  const handleOptionChange = (newOption: string) => {
    setGender(newOption);
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Personal information</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleFunction}>
          <>
            <div className="mt-2">
              <Input disabled={disableEdit} id="name" name="name" value={name || ''} onChange={handleChangeFirstName} label="First name" />
            </div>
          </>
          <>
            <div className="mt-2">
              <Input
                disabled={disableEdit}
                id="secondname"
                name="secondname"
                value={secondName || ''}
                onChange={handleChangeSecondName}
                label="Second name"
              />
            </div>
          </>
          <>
            <div className="mt-2">
              <Input
                disabled={disableEdit}
                id="dateOfBirth"
                name="dateOfBirth"
                value={dateOfBirth || ''}
                onChange={handleChangeDateOfBirth}
                label="Date of birth"
              />
            </div>
          </>
          <>
            <div className="mt-2">
              <RadioButtonGroup
                label={'Gender'}
                disabled={disableEdit}
                options={options}
                selectedOption={gender || ''}
                onChange={handleOptionChange}
              />
            </div>
          </>
          <>
            <Button disabled={!disableEdit} onClick={handleChangeDisableStatus} text="Edit" />
            <Button disabled={disableEdit} text="Save changes" />
          </>
        </form>
      </div>
    </>
  );
};

export default ProfilePage;
