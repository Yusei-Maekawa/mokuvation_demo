import { useState } from 'react';

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [id, setId]         = useState('');
  const [pass, setPass]     = useState('');
  const [error, setError]   = useState('');

  const handleSubmit = () => {
    if (!id.trim() || !pass.trim()) {
      setError('IDとパスワードを入力してください');
      return;
    }
    setError('');
    onLogin();
  };

  return (
    <div className="login-page">
      <div className="login-page__bg-decoration">
        <div className="login-page__orb login-page__orb--1" />
        <div className="login-page__orb login-page__orb--2" />
      </div>

      <div className="login-card">
        <div className="login-card__brand">
          <div className="login-card__logo">M</div>
          <h1 className="login-card__title">
            moku<span>vation</span>
          </h1>
          <p className="login-card__subtitle">目標と行動を、毎日の力に。</p>
        </div>

        <div className="login-form">
          <div className="form-field">
            <label htmlFor="login-id">ユーザーID</label>
            <input
              id="login-id"
              className="form-input"
              type="text"
              placeholder="user@example.com"
              value={id}
              onChange={(e) => setId(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              autoFocus
            />
          </div>

          <div className="form-field">
            <label htmlFor="login-pass">パスワード</label>
            <input
              id="login-pass"
              className="form-input"
              type="password"
              placeholder="••••••••"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
          </div>

          {error && (
            <p style={{ fontSize: 12, color: 'var(--accent-coral)', marginTop: -8 }}>{error}</p>
          )}

          <button className="btn-primary" onClick={handleSubmit} style={{ width: '100%', padding: 'var(--sp-4)' }}>
            ログイン
          </button>
        </div>

        <p className="login-hint">
          ※ デモ用モック。任意のIDとパスワードでログインできます。
        </p>
      </div>
    </div>
  );
}
