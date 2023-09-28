import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  BlacklistUpdated,
  BuyEnableUpdated,
  ClaimEnableUpdated,
  Claimed,
  ClaimedBatch,
  DopTokenUpdated,
  DopWalletUpdated,
  FundsWalletUpdated,
  InvestedWithClaimAmount,
  InvestedWithEth,
  InvestedWithUSDT,
  OwnershipTransferred,
  RoundCreated,
  RoundUpdated,
  SignerUpdated
} from "../generated/rebuyClaims/rebuyClaims"

export function createBlacklistUpdatedEvent(
  which: Address,
  accessNow: boolean
): BlacklistUpdated {
  let blacklistUpdatedEvent = changetype<BlacklistUpdated>(newMockEvent())

  blacklistUpdatedEvent.parameters = new Array()

  blacklistUpdatedEvent.parameters.push(
    new ethereum.EventParam("which", ethereum.Value.fromAddress(which))
  )
  blacklistUpdatedEvent.parameters.push(
    new ethereum.EventParam("accessNow", ethereum.Value.fromBoolean(accessNow))
  )

  return blacklistUpdatedEvent
}

export function createBuyEnableUpdatedEvent(
  oldAccess: boolean,
  newAccess: boolean
): BuyEnableUpdated {
  let buyEnableUpdatedEvent = changetype<BuyEnableUpdated>(newMockEvent())

  buyEnableUpdatedEvent.parameters = new Array()

  buyEnableUpdatedEvent.parameters.push(
    new ethereum.EventParam("oldAccess", ethereum.Value.fromBoolean(oldAccess))
  )
  buyEnableUpdatedEvent.parameters.push(
    new ethereum.EventParam("newAccess", ethereum.Value.fromBoolean(newAccess))
  )

  return buyEnableUpdatedEvent
}

export function createClaimEnableUpdatedEvent(
  oldAccess: boolean,
  newAccess: boolean
): ClaimEnableUpdated {
  let claimEnableUpdatedEvent = changetype<ClaimEnableUpdated>(newMockEvent())

  claimEnableUpdatedEvent.parameters = new Array()

  claimEnableUpdatedEvent.parameters.push(
    new ethereum.EventParam("oldAccess", ethereum.Value.fromBoolean(oldAccess))
  )
  claimEnableUpdatedEvent.parameters.push(
    new ethereum.EventParam("newAccess", ethereum.Value.fromBoolean(newAccess))
  )

  return claimEnableUpdatedEvent
}

export function createClaimedEvent(
  by: Address,
  amount: BigInt,
  round: i32
): Claimed {
  let claimedEvent = changetype<Claimed>(newMockEvent())

  claimedEvent.parameters = new Array()

  claimedEvent.parameters.push(
    new ethereum.EventParam("by", ethereum.Value.fromAddress(by))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  claimedEvent.parameters.push(
    new ethereum.EventParam(
      "round",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(round))
    )
  )

  return claimedEvent
}

export function createClaimedBatchEvent(
  by: Address,
  amount: BigInt,
  rounds: Array<i32>
): ClaimedBatch {
  let claimedBatchEvent = changetype<ClaimedBatch>(newMockEvent())

  claimedBatchEvent.parameters = new Array()

  claimedBatchEvent.parameters.push(
    new ethereum.EventParam("by", ethereum.Value.fromAddress(by))
  )
  claimedBatchEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  claimedBatchEvent.parameters.push(
    new ethereum.EventParam("rounds", ethereum.Value.fromI32Array(rounds))
  )

  return claimedBatchEvent
}

export function createDopTokenUpdatedEvent(
  oldDopAddress: Address,
  newDopAddress: Address
): DopTokenUpdated {
  let dopTokenUpdatedEvent = changetype<DopTokenUpdated>(newMockEvent())

  dopTokenUpdatedEvent.parameters = new Array()

  dopTokenUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldDopAddress",
      ethereum.Value.fromAddress(oldDopAddress)
    )
  )
  dopTokenUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newDopAddress",
      ethereum.Value.fromAddress(newDopAddress)
    )
  )

  return dopTokenUpdatedEvent
}

export function createDopWalletUpdatedEvent(
  oldAddress: Address,
  newAddress: Address
): DopWalletUpdated {
  let dopWalletUpdatedEvent = changetype<DopWalletUpdated>(newMockEvent())

  dopWalletUpdatedEvent.parameters = new Array()

  dopWalletUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldAddress",
      ethereum.Value.fromAddress(oldAddress)
    )
  )
  dopWalletUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return dopWalletUpdatedEvent
}

export function createFundsWalletUpdatedEvent(
  oldAddress: Address,
  newAddress: Address
): FundsWalletUpdated {
  let fundsWalletUpdatedEvent = changetype<FundsWalletUpdated>(newMockEvent())

  fundsWalletUpdatedEvent.parameters = new Array()

  fundsWalletUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldAddress",
      ethereum.Value.fromAddress(oldAddress)
    )
  )
  fundsWalletUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return fundsWalletUpdatedEvent
}

export function createInvestedWithClaimAmountEvent(
  by: Address,
  amountEth: BigInt,
  amountUsd: BigInt,
  round: i32,
  price: BigInt,
  dopPurchased: BigInt
): InvestedWithClaimAmount {
  let investedWithClaimAmountEvent = changetype<InvestedWithClaimAmount>(
    newMockEvent()
  )

  investedWithClaimAmountEvent.parameters = new Array()

  investedWithClaimAmountEvent.parameters.push(
    new ethereum.EventParam("by", ethereum.Value.fromAddress(by))
  )
  investedWithClaimAmountEvent.parameters.push(
    new ethereum.EventParam(
      "amountEth",
      ethereum.Value.fromUnsignedBigInt(amountEth)
    )
  )
  investedWithClaimAmountEvent.parameters.push(
    new ethereum.EventParam(
      "amountUsd",
      ethereum.Value.fromUnsignedBigInt(amountUsd)
    )
  )
  investedWithClaimAmountEvent.parameters.push(
    new ethereum.EventParam(
      "round",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(round))
    )
  )
  investedWithClaimAmountEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  investedWithClaimAmountEvent.parameters.push(
    new ethereum.EventParam(
      "dopPurchased",
      ethereum.Value.fromUnsignedBigInt(dopPurchased)
    )
  )

  return investedWithClaimAmountEvent
}

export function createInvestedWithEthEvent(
  by: Address,
  code: string,
  amountInvestedEth: BigInt,
  round: i32,
  price: BigInt,
  dopPurchased: BigInt
): InvestedWithEth {
  let investedWithEthEvent = changetype<InvestedWithEth>(newMockEvent())

  investedWithEthEvent.parameters = new Array()

  investedWithEthEvent.parameters.push(
    new ethereum.EventParam("by", ethereum.Value.fromAddress(by))
  )
  investedWithEthEvent.parameters.push(
    new ethereum.EventParam("code", ethereum.Value.fromString(code))
  )
  investedWithEthEvent.parameters.push(
    new ethereum.EventParam(
      "amountInvestedEth",
      ethereum.Value.fromUnsignedBigInt(amountInvestedEth)
    )
  )
  investedWithEthEvent.parameters.push(
    new ethereum.EventParam(
      "round",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(round))
    )
  )
  investedWithEthEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  investedWithEthEvent.parameters.push(
    new ethereum.EventParam(
      "dopPurchased",
      ethereum.Value.fromUnsignedBigInt(dopPurchased)
    )
  )

  return investedWithEthEvent
}

export function createInvestedWithUSDTEvent(
  by: Address,
  code: string,
  amountInUsd: BigInt,
  round: i32,
  price: BigInt,
  dopPurchased: BigInt
): InvestedWithUSDT {
  let investedWithUsdtEvent = changetype<InvestedWithUSDT>(newMockEvent())

  investedWithUsdtEvent.parameters = new Array()

  investedWithUsdtEvent.parameters.push(
    new ethereum.EventParam("by", ethereum.Value.fromAddress(by))
  )
  investedWithUsdtEvent.parameters.push(
    new ethereum.EventParam("code", ethereum.Value.fromString(code))
  )
  investedWithUsdtEvent.parameters.push(
    new ethereum.EventParam(
      "amountInUsd",
      ethereum.Value.fromUnsignedBigInt(amountInUsd)
    )
  )
  investedWithUsdtEvent.parameters.push(
    new ethereum.EventParam(
      "round",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(round))
    )
  )
  investedWithUsdtEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  investedWithUsdtEvent.parameters.push(
    new ethereum.EventParam(
      "dopPurchased",
      ethereum.Value.fromUnsignedBigInt(dopPurchased)
    )
  )

  return investedWithUsdtEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRoundCreatedEvent(
  newRound: i32,
  roundData: ethereum.Tuple
): RoundCreated {
  let roundCreatedEvent = changetype<RoundCreated>(newMockEvent())

  roundCreatedEvent.parameters = new Array()

  roundCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "newRound",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newRound))
    )
  )
  roundCreatedEvent.parameters.push(
    new ethereum.EventParam("roundData", ethereum.Value.fromTuple(roundData))
  )

  return roundCreatedEvent
}

export function createRoundUpdatedEvent(
  round: i32,
  roundData: ethereum.Tuple
): RoundUpdated {
  let roundUpdatedEvent = changetype<RoundUpdated>(newMockEvent())

  roundUpdatedEvent.parameters = new Array()

  roundUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "round",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(round))
    )
  )
  roundUpdatedEvent.parameters.push(
    new ethereum.EventParam("roundData", ethereum.Value.fromTuple(roundData))
  )

  return roundUpdatedEvent
}

export function createSignerUpdatedEvent(
  oldSigner: Address,
  newSigner: Address
): SignerUpdated {
  let signerUpdatedEvent = changetype<SignerUpdated>(newMockEvent())

  signerUpdatedEvent.parameters = new Array()

  signerUpdatedEvent.parameters.push(
    new ethereum.EventParam("oldSigner", ethereum.Value.fromAddress(oldSigner))
  )
  signerUpdatedEvent.parameters.push(
    new ethereum.EventParam("newSigner", ethereum.Value.fromAddress(newSigner))
  )

  return signerUpdatedEvent
}
