# 건강 퀘스트

건강 습관을 완료하며 경험치와 코인을 모으는 React + Vite 기반 PWA입니다. 모든 기록은 별도 서버 없이 브라우저의 IndexedDB에 저장됩니다.

## 로컬 실행

1. Node.js 20 이상을 설치합니다.
2. 이 폴더에서 터미널을 엽니다.
3. `npm install`을 실행합니다.
4. `npm run dev`를 실행합니다.
5. 터미널에 표시된 주소(보통 `http://localhost:5173`)를 브라우저에서 엽니다.

배포 전 결과를 확인하려면 `npm run build` 후 `npm run preview`를 실행합니다.

## GitHub에 올리기

1. GitHub에서 빈 저장소를 만듭니다.
2. 이 폴더에서 `git init`을 실행합니다.
3. `git add .`을 실행합니다.
4. `git commit -m "건강 퀘스트 첫 버전"`을 실행합니다.
5. GitHub가 안내하는 저장소 연결 및 push 명령을 실행합니다.

## 배포

Vercel 또는 Netlify에서 GitHub 저장소를 가져옵니다. 빌드 명령은 `npm run build`, 출력 폴더는 `dist`로 지정합니다. PWA 설치에는 HTTPS 주소가 필요합니다.

## 휴대전화 설치

- Android Chrome: 배포 주소를 연 뒤 메뉴에서 **앱 설치** 또는 **홈 화면에 추가**를 누릅니다.
- iPhone Safari: 공유 버튼을 누르고 **홈 화면에 추가**를 선택합니다.

설치 후 앱은 독립 창으로 실행되며, 한 번 연 화면과 저장된 기록은 오프라인에서도 사용할 수 있습니다.
