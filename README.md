# Network Lab

A unified network training platform combining three CLI simulators into one application.

**Built by Advanced Technological Solutions**

## Labs

| Lab | Description | Source Repo |
|-----|-------------|-------------|
| 🌐 VyOS | Router/firewall CLI — routing, NAT, BGP/OSPF | [vyos-lab](https://github.com/krewkrewkrew/vyos-lab) |
| 🔀 Cisco IOS | Switch/router CLI — VLANs, STP, ACLs | [cisco-lab](https://github.com/krewkrewkrew/cisco-lab) |
| 🐧 Ubuntu Linux | Bash/Linux CLI — sysadmin, scripting | [ubuntu-lab](https://github.com/krewkrewkrew/ubuntu-lab) |

## Project Structure

```
src/
├── pages/
│   ├── LabSelector.jsx          # Home screen — pick a lab
│   ├── VyOSSimulator.jsx        # VyOS lab page
│   ├── CiscoSimulator.jsx       # Cisco IOS lab page
│   └── UbuntuSimulator.jsx      # Ubuntu lab page
├── components/
│   ├── vyos/                    # VyOS Terminal + TrainingPanel
│   │   ├── terminal/            # ← copy from vyos-lab/src/components/terminal/
│   │   └── training/            # ← copy from vyos-lab/src/components/training/
│   ├── cisco/                   # Cisco Terminal + TrainingPanel
│   │   ├── terminal/            # ← copy from cisco-lab/src/components/terminal/
│   │   └── training/            # ← copy from cisco-lab/src/components/training/
│   └── ubuntu/                  # Ubuntu Terminal + TrainingPanel
│       ├── terminal/            # ← copy from ubuntu-lab/src/components/terminal/
│       └── training/            # ← copy from ubuntu-lab/src/components/training/
└── lib/
    ├── vyos/                    # ← copy from vyos-lab/src/lib/
    ├── cisco/                   # ← copy from cisco-lab/src/lib/
    └── ubuntu/                  # ← copy from ubuntu-lab/src/lib/
```

## Setup

### 1. Clone and install
```bash
git clone https://github.com/krewkrewkrew/network-lab
cd network-lab
npm install
```

### 2. Copy lab-specific source files

Each simulator's `Terminal`, `StatusBar`, `TrainingPanel` components and `lib/` files are
not included in this scaffold — they need to be copied from the originating repos:

```bash
# Clone source repos alongside this one
git clone https://github.com/krewkrewkrew/vyos-lab
git clone https://github.com/krewkrewkrew/cisco-lab
git clone https://github.com/krewkrewkrew/ubuntu-lab

# VyOS components
mkdir -p src/components/vyos src/lib/vyos
cp -r vyos-lab/src/components/terminal  src/components/vyos/terminal
cp -r vyos-lab/src/components/training  src/components/vyos/training
cp    vyos-lab/src/lib/switchState.js   src/lib/vyos/switchState.js
cp    vyos-lab/src/lib/commandParser.js src/lib/vyos/commandParser.js
cp    vyos-lab/src/lib/commandHelp.js   src/lib/vyos/commandHelp.js
cp    vyos-lab/src/lib/showCommands.js  src/lib/vyos/showCommands.js
cp    vyos-lab/src/lib/vyosShowCommands.js src/lib/vyos/vyosShowCommands.js
cp    vyos-lab/src/lib/routerState.js   src/lib/vyos/routerState.js
cp    vyos-lab/src/lib/pingSimulator.js src/lib/vyos/pingSimulator.js
cp    vyos-lab/src/lib/bootBanner.js    src/lib/vyos/bootBanner.js
cp    vyos-lab/src/lib/scenarios.js     src/lib/vyos/scenarios.js
cp -r vyos-lab/src/lib/scenarios        src/lib/vyos/scenarios

# Cisco components
mkdir -p src/components/cisco src/lib/cisco
cp -r cisco-lab/src/components/terminal  src/components/cisco/terminal
cp -r cisco-lab/src/components/training  src/components/cisco/training
cp -r cisco-lab/src/lib/.                src/lib/cisco/

# Ubuntu components
mkdir -p src/components/ubuntu src/lib/ubuntu
cp -r ubuntu-lab/src/components/terminal  src/components/ubuntu/terminal
cp -r ubuntu-lab/src/components/training  src/components/ubuntu/training
cp -r ubuntu-lab/src/lib/.                src/lib/ubuntu/
```

### 3. Fix internal imports
After copying, update any `@/lib/` or `@/components/` paths inside the copied files
to use the new namespaced paths (e.g. `@/lib/vyos/switchState`).

> **Tip:** Run a bulk find-replace in VS Code:
> - vyos files: `from '@/lib/` → `from '@/lib/vyos/`
> - cisco files: `from '@/lib/` → `from '@/lib/cisco/`
> - ubuntu files: `from '@/lib/` → `from '@/lib/ubuntu/`

### 4. Run
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — you'll see the lab selector.

## Routes

| Route | Page |
|-------|------|
| `/` | Lab Selector (home) |
| `/vyos` | VyOS Simulator |
| `/cisco` | Cisco IOS Simulator |
| `/ubuntu` | Ubuntu Linux Simulator |
