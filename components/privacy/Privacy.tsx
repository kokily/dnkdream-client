import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles';
import TitleHeader from '../common/TitleHeader';
import Title from './common/Title';
import First from './common/First';
import Second from './common/Second';
import Third from './common/Third';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: '윤고딕310';
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1110px;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 95%;
  }
`;

const TopHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .title {
    display: flex;
    max-width: 850px;
    font-size: 17px;
    color: #777;
    word-break: keep-all;
  }
  .sub {
    display: flex;
    font-size: 14px;
    color: #777;
    word-break: keep-all;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface Props {}

const Privacy: React.FC<Props> = () => {
  return (
    <Container>
      <Contents>
        <TitleHeader title="개인정보처리방침" />

        <TopHeader>
          <p className="title">
            디엔케이드림은 이용자의 '동의를 기반으로 개인정보를 수집·이용 및
            제공하고 있으며, 이용자의 권리(개인정보 자기 결정권)를 적극적으로
            보장'하며, 대한민국의 개인정보보호 규정 및 가이드라인을 준수하고
            있습니다.
          </p>

          <p className="sub">
            본 개인정보처리방침은 디엔케이드림 홈페이지 내 '물어보세요' 서비스
            이용을 하고자 하는 이용자(이하 '이용자')에 적용됩니다.
          </p>
        </TopHeader>

        <Layout>
          <Title>1. 처리하는 개인정보 항목</Title>
          <First>
            디엔케이드림은 최소한의 개인정보를 수집하여 처리하고 있습니다.
          </First>
          <Second>가. 문의사항 보내기 메뉴</Second>
          <Third>- 필수항목: 이름, 이메일, 제목, 내용</Third>
          <Third>- 선택항목: 전화번호</Third>
          <First>
            디엔케이드림은 다음과 같은 방법으로 개인 정보를 수집합니다.
          </First>
          <Second>이용자의 입력</Second>

          <Title>2. 개인정보의 처리 목적</Title>
          <First>
            디엔케이드림 이용자의 소중한 개인정보를 '이메일 문의에 대한 답변 및
            서비스 제공 내용 안내'의 목적으로만 이용하며 목적이 변경될 경우
            사전에 이용자의 동의를 구하도록 하겠습니다.
          </First>

          <Title>3. 개인정보의 처리 및 보유기간</Title>
          <First>
            디엔케이드림은 이용자의 개인 정보를 목적 달성을 위한 기간 동안에만
            제한적으로 처리하고 있으며, 처리목적이 달성되면 해당 이용자의 개인
            정보의 경우는 별도로 저장 및 파기하고 있습니다.
          </First>
          <First>
            문의에 따른 개인정보는 3개월간 보관하며, 이후 해당 정보는 지체없이
            파기됩니다.
          </First>

          <Title>4. 개인정보의 제공 및 위탁</Title>
          <First>
            디엔케이드림은 원칙적으로 이용자의 동의없이 개인 정보를 외부에
            제공하지 않습니다.
          </First>

          <Title>5. 개인정보의 파기</Title>
          <First>데이터베이스 삭제</First>

          <Title>6. 개인정보의 안전성 확보 조치</Title>
          <First>
            디엔케이드림은 이용자의 개인 정보를 가장 소중한 가치로 여기고 개인
            정보를 처리함에 있어서 다음과 같은 노력을 하고 있습니다.
          </First>
          <Second>가. 이용자의 개인정보를 암호화하고 있습니다.</Second>
          <Third>
            이용자의 개인 정보를 암호화된 통신구간을 이용하여 전송하고, 비밀번호
            등 중요정보는 암호화하여 보관하고 있습니다.
          </Third>
          <Second>
            나. 해킹이나 컴퓨터 바이러스로부터 보호하기 위해 노력하고 있습니다.
          </Second>
          <Third>
            해킹이나 컴퓨터 바이러스 등에 의해 이용자의 개인 정보가 유출되거나
            훼손되는 것을 막기 위해 지속적으로 확인·감시하고 있습니다.
          </Third>
          <Second>
            다. 소중한 개인정보에 접근할 수 있는 사람을 최소화하고 있습니다.
          </Second>
          <Second>
            라. 임직원에게 이용자의 개인 정보 보호에 대해 정기적인 교육을
            실시하고 있습니다.
          </Second>
          <Title>
            7. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항
          </Title>
          <First>사용자 인증(Authorization)을 위한 쿠키사용</First>
          <Second>
            디엔케이드림은 사용자 인증을 위한 쿠키사용을 관리자('admin')에게만
            부여하고 있습니다.
          </Second>

          <Title>8. 개인정보 보호책임자 등</Title>
          <First>
            홈페이지를 이용하시는 과정에서 개인정보보호 관련 문의, 불만,
            조언이나 기타 사항은 개인정보 보호책임자에게 연락 주시기 바랍니다.
          </First>
          <Second>개인정보 보호책임자</Second>
          <Third>책임자: 김현성</Third>
          <Third>문의: hkkokily5@gmail.com</Third>
          <Second>
            개인정보가 침해되어 이에 대한 신고나 상담이 필요할 경우 아래 기관에
            문의하셔서 도움을 받으실 수 있습니다.
          </Second>
          <Third>
            개인정보침해 신고센터: (국번없이)118{' '}
            <a href="//privacy.kisa.or.kr">링크</a>
          </Third>
          <Third>
            대검찰청 사이버수사과: (국번없이)1301 <span>cid@spo.go.kr</span>
          </Third>
          <Third>
            경찰청 사이버안전국: (국번없이)182
            <a href="//cyberbureau.police.go.kr">링크</a>
          </Third>
        </Layout>
      </Contents>
    </Container>
  );
};

export default Privacy;
