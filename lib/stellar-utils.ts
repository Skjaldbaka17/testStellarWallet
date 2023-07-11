import { useEffect, useState } from "react";
import {
  ISupportedWallet,
  StellarWalletsKit,
  WalletNetwork,
  WalletType,
} from "stellar-wallets-kit";

let _stellarKit: StellarWalletsKit | undefined = undefined;

const initStellarKit = () => {
  if (_stellarKit === undefined) {
    _stellarKit = new StellarWalletsKit({
      network: WalletNetwork.TESTNET,
      selectedWallet: WalletType.XBULL,
    });
  }

  return _stellarKit;
};

export { initStellarKit };

type Err = {
  code: number;
  ext: string;
  message: string;
};

export const useStellarKit = () => {
  const stellarKit = initStellarKit();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Err | undefined>(undefined);
  const [wallets, setWallets] = useState<ISupportedWallet[]>([]);

  const connect = async (walletType: keyof typeof WalletType) => {
    let data;
    let error;
    try {
      setError(undefined);
      stellarKit.setWallet(WalletType[walletType]);
      data = await stellarKit.getPublicKey();
    } catch (e: any) {
      error = e?.error || undefined;
      setError(error);
    }

    setLoading(false);
    return { data, error };
  };

  const getWallets = async () => {
    setLoading(true);
    const wallets = await StellarWalletsKit.getSupportedWallets();
    setWallets(wallets);
    setLoading(false);
  };

  useEffect(() => {
    getWallets();
  }, []);

  return {
    connect,
    getWallets,
    isLoading,
    wallets,
    error,
  };
};
