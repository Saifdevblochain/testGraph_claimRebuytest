import {
  BlacklistUpdated as BlacklistUpdatedEvent,
  BuyEnableUpdated as BuyEnableUpdatedEvent,
  ClaimEnableUpdated as ClaimEnableUpdatedEvent,
  Claimed as ClaimedEvent,
  ClaimedBatch as ClaimedBatchEvent,
  DopTokenUpdated as DopTokenUpdatedEvent,
  DopWalletUpdated as DopWalletUpdatedEvent,
  FundsWalletUpdated as FundsWalletUpdatedEvent,
  InvestedWithClaimAmount as InvestedWithClaimAmountEvent,
  InvestedWithEth as InvestedWithEthEvent,
  InvestedWithUSDT as InvestedWithUSDTEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RoundCreated as RoundCreatedEvent,
  RoundUpdated as RoundUpdatedEvent,
  SignerUpdated as SignerUpdatedEvent
} from "../generated/rebuyClaims/rebuyClaims"
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
} from "../generated/schema"

export function handleBlacklistUpdated(event: BlacklistUpdatedEvent): void {
  let entity = new BlacklistUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.which = event.params.which
  entity.accessNow = event.params.accessNow

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBuyEnableUpdated(event: BuyEnableUpdatedEvent): void {
  let entity = new BuyEnableUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldAccess = event.params.oldAccess
  entity.newAccess = event.params.newAccess

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimEnableUpdated(event: ClaimEnableUpdatedEvent): void {
  let entity = new ClaimEnableUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldAccess = event.params.oldAccess
  entity.newAccess = event.params.newAccess

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimed(event: ClaimedEvent): void {
  let entity = new Claimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.by = event.params.by
  entity.amount = event.params.amount
  entity.round = event.params.round

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimedBatch(event: ClaimedBatchEvent): void {
  let entity = new ClaimedBatch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.by = event.params.by
  entity.amount = event.params.amount
  entity.rounds = changetype<i32[]>(event.params.rounds)

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDopTokenUpdated(event: DopTokenUpdatedEvent): void {
  let entity = new DopTokenUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldDopAddress = event.params.oldDopAddress
  entity.newDopAddress = event.params.newDopAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDopWalletUpdated(event: DopWalletUpdatedEvent): void {
  let entity = new DopWalletUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldAddress = event.params.oldAddress
  entity.newAddress = event.params.newAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundsWalletUpdated(event: FundsWalletUpdatedEvent): void {
  let entity = new FundsWalletUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldAddress = event.params.oldAddress
  entity.newAddress = event.params.newAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInvestedWithClaimAmount(
  event: InvestedWithClaimAmountEvent
): void {
  let entity = new InvestedWithClaimAmount(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.by = event.params.by
  entity.amountEth = event.params.amountEth
  entity.amountUsd = event.params.amountUsd
  entity.round = event.params.round
  entity.price = event.params.price
  entity.dopPurchased = event.params.dopPurchased

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInvestedWithEth(event: InvestedWithEthEvent): void {
  let entity = new InvestedWithEth(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.by = event.params.by
  entity.code = event.params.code
  entity.amountInvestedEth = event.params.amountInvestedEth
  entity.round = event.params.round
  entity.price = event.params.price
  entity.dopPurchased = event.params.dopPurchased

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInvestedWithUSDT(event: InvestedWithUSDTEvent): void {
  let entity = new InvestedWithUSDT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.by = event.params.by
  entity.code = event.params.code
  entity.amountInUsd = event.params.amountInUsd
  entity.round = event.params.round
  entity.price = event.params.price
  entity.dopPurchased = event.params.dopPurchased

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoundCreated(event: RoundCreatedEvent): void {
  let entity = new RoundCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newRound = event.params.newRound
  entity.roundData_startTime = event.params.roundData.startTime
  entity.roundData_endTime = event.params.roundData.endTime
  entity.roundData_price = event.params.roundData.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoundUpdated(event: RoundUpdatedEvent): void {
  let entity = new RoundUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.round = event.params.round
  entity.roundData_startTime = event.params.roundData.startTime
  entity.roundData_endTime = event.params.roundData.endTime
  entity.roundData_price = event.params.roundData.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSignerUpdated(event: SignerUpdatedEvent): void {
  let entity = new SignerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldSigner = event.params.oldSigner
  entity.newSigner = event.params.newSigner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
