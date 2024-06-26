import styled from '@emotion/styled';
import { Button, ButtonProps } from '@totejs/uikit';

export const DefaultButton = (props: ButtonProps) => {
  return (
    <BaseButton
      variant="ghost"
      fontWeight={600}
      _disabled={{
        color: 'rgba(24, 26, 30, 0.45)',
        background: 'rgba(247, 247, 248, 0.45)',
        cursor: 'not-allowed',
        _hover: {
          color: 'rgba(24, 26, 30, 0.45)',
          background: 'rgba(247, 247, 248, 0.45)',
        },
      }}
      {...props}
    />
  );
};

export const BaseButton = styled(Button)`
  font-size: 14px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 8px;
  border: 1px solid #f1f2f3;

  background: rgb(241, 242, 243);
  color: rgb(24, 26, 30);

  &:hover {
    background: rgba(241, 242, 243, 0.9);
    color: rgb(24, 26, 30);
  }

  &:active {
    background: #ffffff;
    color: #181a1e;
  }
`;
